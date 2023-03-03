function ErrorHandler({ error }: { error: Error }) {

    return (
  
      
          <>
          <p className="text-5xl font-bold">An error occurred</p>
  
          <pre className="text-3xl text-center">Reason: {error.message}</pre>
        </>  
  
    );
  
  }
  
  
  
  export default ErrorHandler;