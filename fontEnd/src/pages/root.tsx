import React from "react";
import { Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const Devtools: React.FC = () =>
    import.meta.env.MODE === "development" && (
        <>
            <TanStackRouterDevtools position="bottom-right" initialIsOpen={false} />
            <ReactQueryDevtools buttonPosition="bottom-left" />
        </>
    );

// components
import { ModeToggle } from "@/components/shared/ModeToggle";
export const Root: React.FC = () => {
    return (
        <div className="p-2">
            <ModeToggle />
            <Outlet />
            <Devtools />
        </div>
    );
}