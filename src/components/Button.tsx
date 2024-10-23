import Button from './ui/button';

const AuthPage = () => {
  const handleSignIn = () => {
    // Your sign-in logic here
    console.log('Sign In clicked');
  };

  const handleSignUp = () => {
    // Your sign-up logic here
    console.log('Sign Up clicked');
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <Button label="Sign In" onClick={handleSignIn} variant="primary" />
      <Button label="Sign Up" onClick={handleSignUp} variant="secondary" />
    </div>
  );
};

export default AuthPage;
