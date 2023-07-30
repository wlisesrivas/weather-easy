import React from "react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-gray-100 pt-4 pb-6">
            <hr className="my-6 border-gray-300"/>
            <div className="flex flex-wrap items-center md:justify-between justify-center">
                <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                    <div className="text-sm text-gray-600 py-1">
                        Copyright &copy;{currentYear}{" "} Easy Weather by <a target="_blank"
                                                                          className="font-semibold"
                                                                          href="https://codeasy.co">CodEasy</a>.
                    </div>
                </div>
            </div>
        </footer>
    )

}
