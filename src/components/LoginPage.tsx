import { auth, googleAuthProvider } from "../config/firebaseConfig";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function LoginPage(): JSX.Element {
  const navigate = useNavigate();
  const [authing, setAuthing] = useState<boolean>(false);

  const signInWithGoogle = async () => {
    setAuthing(true);
    try {
      await signInWithPopup(auth, googleAuthProvider);
      navigate("/");
    } catch (err) {
      console.error(err);
      setAuthing(false);
    }
  };
  return (
    <>
      <h1>Use the button to Login!</h1>
      <button onClick={() => signInWithGoogle()} disabled={authing}>
        LOGIN WITH GOOGLE
      </button>
    </>
  );
}