import { useState } from "react";
import { useDispatch } from "react-redux";
import { setAlert } from "../../app/features/AlertSlice";
import instance from "../api";

const useFetch_GET = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const dispatch = useDispatch();

  const getData = async (url) => {
    setIsLoading(true);
    try {
      const response = await instance.get(url);
      setData(response?.data);
    } catch (error) {
      setError(error);
      console.log(error.code);
      dispatch(
        setAlert({
          status: error.code,
          open: true,
        })
      );
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, error, data, getData };
};

export default useFetch_GET;
