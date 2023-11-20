import React,{useState} from 'react';

const Table = ({ employees, handleEdit, handleDelete }) => {
  employees.forEach((employee, i) => {
    employee.id = i + 1;
  });

  const [Search,setSearch]=useState("")
  const [users, setusers] = useState([])
  return (
    <>


      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="pb-4 bg-white dark:bg-gray-900">
          <label htmlFor="table-search" className="sr-only">Searchs</label>
          <div className="relative mt-1">
            <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <input onChange={(ev)=>setSearch(ev.target.value)} type="text" id="table-search" className="ring-1 ring-blue-500 block py-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items" />
          </div>
        </div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 px-4">
          <thead className="text-xs text-gray-700 uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-400 ">
            <tr className=''>
              <th scope="col" className="p-4">
               No
              </th>
              
              <th scope="col" className="px-6 py-3">
                First Name
              </th>
              <th scope="col" className="px-6 py-3">
                Last Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Salary
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {employees.filter((user)=>{
               return Search.toLowerCase()===''?employees:user.firstName.toLowerCase().includes(Search);
            })
              .map((employee, i) => (
                <tr key={employee.id} className="text-lg bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
               
                  <td className="w-4 p-4">{i + 1}</td>
                  <th scope="row" className="px-6 py-4 font-medium text-blue-900 whitespace-nowrap dark:text-white">
                    {employee.firstName}
                  </th>
                  <td className="px-6 py-4 ">
                    {employee.lastName}
                  </td>
                  <td className="px-6 py-4 text-purple-400 ">
                    {employee.email}
                  </td>
                  <td className="px-6 py-4">
                    {`$ ${employee.salary}`}
                  </td>
                  <td className="px-6 py-4">
                    {employee.date}
                  </td>
                  <td className="pe-0">
                    <button onClick={() => handleEdit(employee.id)} className="px-8 py-1 bold h-10 px-5 m-2 text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800">
                      Edit</button>

                    <button onClick={() => handleDelete(employee.id)} className="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                      Delete
                    </button>
                  </td>
                </tr>
              ))
              }
          </tbody>
        </table>
      </div>

    </>
  );
};

export default Table;
