import ErrorPage from "../components/ErrorPage";

export default function Error404() {
  return (
    <ErrorPage
      code="404"
      description="Page Not Found"
      image="/img/404.png"
    />
  );
}