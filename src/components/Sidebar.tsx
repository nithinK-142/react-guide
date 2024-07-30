import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import AddTodoForm from "./AddTodoForm";
import Button from "./Button";

export default function Sidebar() {
  const { isAuthenticated, isLoading, user, login, register, logout } =
    useKindeAuth();
  console.log(user);
  return (
    <div className="col-[2_/_3] row-[2_/_3] bg-[#fffcf9] pt-[18px] px-[25px] pb-[28px] flex flex-col justify-between border-l border-l-[rgba(0,0,0,0.08)]">
      <AddTodoForm />
      <div className="mt-auto space-y-2">
        {isLoading ? null : isAuthenticated ? (
          <>
            <p className="text-sm">
              Logged in as {user?.email || user?.given_name}
            </p>

            <Button
              buttonType="secondary"
              onClick={() => logout()}
              buttonText="Log out"
            />
          </>
        ) : (
          <>
            <Button
              buttonType="secondary"
              onClick={() => login()}
              buttonText="Log in"
            />
            <Button
              buttonType="secondary"
              onClick={() => register()}
              buttonText="Register"
            />
          </>
        )}
      </div>
    </div>
  );
}
