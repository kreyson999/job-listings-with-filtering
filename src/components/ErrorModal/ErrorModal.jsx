const ErrorModal = ({error}) => {
  return (
    <p>
      {error.toString()}
    </p>
  );
}
 
export default ErrorModal;