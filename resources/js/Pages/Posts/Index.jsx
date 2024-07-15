import React from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link, router } from "@inertiajs/react";

const Index = (props) => {
    const { posts } = props;

    const handleDeletePost = (id) => {
        router.delete(`/posts/${id}`, {
            onBefore: () => confirm("本当に削除しますか？"),
        });
    };

    return (
        <Authenticated
            user={props.auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Index
                </h2>
            }
        >
            <div className="p-12">
                <div>
                    <Link
                        href="/posts/create"
                        className="p-2 bg-purple-300 hover:bg-purple-400 rounded-md"
                    >
                        Create
                    </Link>
                </div>
                {posts.map((post) => (
                    <div key={post.id}>
                        <div className="my-5">
                            <Link
                                href={`/posts/${post.id}`}
                                className="p-2 bg-purple-300 hover:bg-purple-400 rounded-md"
                            >
                                {post.title}
                            </Link>
                        </div>
                        <div className="my-5">
                            <p>{post.body}</p>
                        </div>
                        <div>
                            <a
                                href={`/categories/${post.category.id}`}
                                className="p-2 bg-purple-300 hover:bg-purple-400 rounded-md"
                            >
                                {post.category.name}
                            </a>
                        </div>
                        <div className="my-5">
                            <button
                                className="p-2 bg-purple-300 hover:bg-purple-400 rounded-md"
                                onClick={() => handleDeletePost(post.id)}
                            >
                                delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </Authenticated>
    );
};

export default Index;
