import React from "react";
import { Link, useForm } from "@inertiajs/react";
import Authenticated from "@/Layouts/AuthenticatedLayout";

const Create = (props) => {
    const { categories } = props;

    const { data, setData, post } = useForm({
        title: "",
        body: "",
        category_id: categories[0].id,
    });

    const handleSendPosts = (e) => {
        e.preventDefault();
        post("/posts/store");
    };

    return (
        <Authenticated
            user={props.auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Create
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
                                    {category.name}
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

export default Create;
