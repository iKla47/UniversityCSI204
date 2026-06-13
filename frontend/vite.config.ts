import react from "@vitejs/plugin-react";
import tsConfigPath from "vite-tsconfig-paths";

export default
{
    plugins: 
    [
        react (),
        tsConfigPath ()
    ],
    resolve:
    {
        tsconfigPaths: false,
    },
    server: 
    {
        host: "0.0.0.0",
        port: 44000,
        strictPort: true,
        hmr: true,
        cors:
        {
            methods: "GET",
            credentials: true,
            origin: /^https?:\/\/(?:(?:[^:]+\.)?localhost|127\.0\.0\.1|\[::1\])(?::\d+)?$/ 
        }
    },
}