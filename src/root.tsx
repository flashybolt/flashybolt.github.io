// @refresh reload
import { Suspense } from "solid-js";
import {
  useLocation,
  A,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import "./root.css";
import Navbar from "./components/Navbar";

export default function Root() {
  let location = useLocation().pathname;
  if (location == "/") location = "/home";
  location = location.slice(1)
  location = location.charAt(0).toUpperCase() + location.slice(1);
  return (
    <Html lang="en" class="dark">
      <Head>
        <Title>{location}</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="/fa/brands.min.js"></script>
        <script defer src="/fa/solid.min.js"></script>
        <script defer src="/fa/fontawesome.min.js"></script>
        <script src="/darkmode.js"></script>
      </Head>
      <Body class="dark:bg-black dark:text-white bg-white text-black font-inter transition duration-300 ease-in-out">
        <Suspense>
          <ErrorBoundary>
            <Navbar/>
            <Routes>
              <FileRoutes />
            </Routes>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
