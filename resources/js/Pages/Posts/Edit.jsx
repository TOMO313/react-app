import React from "react";
import { Link, useForm } from "@inertiajs/react";
import Authenticated from "@/Layouts/AuthenticatedLayout";

const Edit = (props) => {
    const { post } = props;
    const { categories } = props;

    const { data, setData, put } = useForm({
        title: post.title,
        body: post.body,
        category_id: post.category.id,
    });

    const handleSendPosts = (e) => {
        e.preventDefault();
        put(`/posts/${post.id}`);
    };

    return (
        <Authenticated
            user={props.auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Edit
                </h2>
            }
        >
            <div className="p-12">
                <form onSubmit={handleSendPosts}>
                    <div>
                        <h2>Title</h2>
                        <input
                            type="text"
                            placeholder="タイトル"
                            value={data.title}
                            onChange={(e) => setData("title", e.target.value)}
                        />
                        <span className="text-red-600">
                            {props.errors.title}
                        </span>
                    </div>
                    <div>
                        <h2>Body</h2>
                        <textarea
                            placeholder="今日も一日お疲れ様でした"
                            value={data.body}
                            onChange={(e) => setData("body", e.target.value)}
                        ></textarea>
                        <span className="text-red-600">
                            {props.errors.body}
                        </span>
                    </div>
                    <div>
                        <h2>Category</h2>
                        <select
                            onChange={(e) =>
                                setData("category_id", e.target.value)
                            }
                        >
                            {categories.map((category) => (
                                <option key={category.id} value={category.id}>
                                    {post.category.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button
                        type="submit"
                        className="p-1 bg-purple-300 hover:bg-purple-400 rounded-md"
                    >
                        Send
                    </button>
                </form>
                <Link href="/posts">戻る</Link>
            </div>
        </Authenticated>
    );
};

export default Edit;
