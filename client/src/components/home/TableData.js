import { BsEyeFill } from "react-icons/bs";
import { TbEdit } from "react-icons/tb";
import { AiFillDelete } from "react-icons/ai";

const TableData = () => {
  return (
    <>
      <div className="overflow-x-auto mt-50">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>ID</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <button className="btn outline-none border-none text-xl lg:mr-3 lg:mt-3 bg-primary hover:bg-primary-focus">
                <BsEyeFill />
              </button>
              <button className="btn outline-none border-none text-xl lg:mr-3 lg:mt-3 bg-secondary hover:bg-secondary-focus">
                <TbEdit />
              </button>
              <button className="btn outline-none border-none text-xl lg:mr-3 lg:mt-3 bg-red-600 hover:bg-red-700">
                <AiFillDelete />
              </button>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableData;
