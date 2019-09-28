import React from "react";

const Table = () => {
  return (
    <table className="table table-sm table-hover">
      <thead>
        <tr>
          <th scope="col">File Name</th>
          <th scope="col">Column Two</th>
          <th scope="col">Column Three</th>
          <th scope="col">Column Four</th>
          <th scope="col">Status</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</td>
          <td>Data 2</td>
          <td>Data 3</td>
          <td>Data 4</td>
          <td>New</td>
          <td><i class="fas fa-download"></i></td>
        </tr>
        <tr>
          <td>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</td>
          <td>Data 2</td>
          <td>Data 3</td>
          <td>Data 4</td>
          <td>New</td>
          <td><i class="fas fa-download"></i></td>
        </tr>
        <tr>
          <td>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</td>
          <td>Data 2</td>
          <td>Data 3</td>
          <td>Data 4</td>
          <td>New</td>
          <td><i class="fas fa-download"></i></td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
