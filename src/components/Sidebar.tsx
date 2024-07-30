import AddTodoForm from "./AddTodoForm";
import Button from "./Button";

export default function Sidebar() {
  return (
    <div className="col-[2_/_3] row-[2_/_3] bg-[#fffcf9] pt-[18px] px-[25px] pb-[28px] flex flex-col justify-between border-l border-l-[rgba(0,0,0,0.08)]">
      <AddTodoForm />
      <div className="mt-auto space-y-2">
        <Button buttonType="secondary" buttonText="Login" />
        <Button buttonType="secondary" buttonText="Register" />
      </div>
    </div>
  );
}
