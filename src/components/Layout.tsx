import { Outlet, useLocation } from "react-router";
import { SiteHeader } from "./SiteHeader";
import { Footer } from "./Footer";
import { useEffect } from "react";

export function Layout() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [pathname]);

    return (
        <div className="min-h-screen" style={{ fontFamily: "Inter, sans-serif" }}>
        <SiteHeader />
        <main>
            <Outlet />
        </main>
        <Footer />
        </div>
    );
}
