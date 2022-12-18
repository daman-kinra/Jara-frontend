import { useSelector } from "react-redux";
function useAppSelector() {
  const selector = useSelector;
  return selector;
}

export default useAppSelector;
