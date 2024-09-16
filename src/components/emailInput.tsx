import { useState, useEffect } from "react";

export const EmailInput = ({
  email,
  handleEmailSubmit,
  isSubmitSuccessful,
}: {
  email: string;
  handleEmailSubmit: (arg0: string) => void;
  isSubmitSuccessful: boolean;
}) => {
  const [isValid, setIsValid] = useState<boolean>(false);
  const [tempEmail, setTempEmail] = useState<string>("");
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  useEffect(() => {
    setIsValid(emailRegex.test(tempEmail));
  }, [tempEmail]);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setTempEmail(newEmail);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit triggered successfully");
    if (isValid && tempEmail !== "") {
      handleEmailSubmit(tempEmail);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto">
      <label
        htmlFor="email"
        className="block text-sm font-medium text-gray-700"
      >
        <p className="text-brownSriracha italic">Email address</p>
      </label>
      <div className="mt-1 flex gap-2">
        <input
          type="email"
          id="email"
          name="email"
          value={tempEmail}
          onChange={handleEmailChange}
          className={`shadow-sm border border-brownSriracha border-opacity-75 p-2 focus:ring-brownSriracha focus:border-brownSriracha block w-full sm:text-sm rounded-md
            ${!isValid && tempEmail !== "" ? "border-redSriracha" : ""}`}
          placeholder="you@example.com"
        />
        <button
          type="submit"
          className={
            isValid && tempEmail !== ""
              ? "flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-brownSriracha hover:bg-brownSriracha focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brownSriracha"
              : "flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-300 bg-white"
          }
          disabled={!isValid || tempEmail === ""}
        >
          <p className="font-semibold">Submit</p>
        </button>
      </div>
      {!isValid && tempEmail !== "" && (
        <p className="mt-2 text-sm text-redSriracha">
          Please enter a valid email address.
        </p>
      )}
      {isSubmitSuccessful && (
        <p className="mt-2 text-sm text-greenSriracha">
          I will be in touch soon!
        </p>
      )}
    </form>
  );
};
