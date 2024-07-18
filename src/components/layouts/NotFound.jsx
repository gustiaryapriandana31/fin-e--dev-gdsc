import { useRouteError } from "react-router-dom";

const NotFoundPage = () => {
  const notFound = useRouteError();
  // console.log(notFound);
  return (
    <div className="pt-10 w-full h-screen text-red-700 bg-red-200 font-medium text-center text-lg">
      <h1 className="font-bold text-xl">Uuhhh!</h1>
      <p>Something wrong occured when enter this page</p>
      <p>
        {notFound.status} - {notFound.statusText || notFound.message}
      </p>
    </div>
  );
};

export default NotFoundPage;
