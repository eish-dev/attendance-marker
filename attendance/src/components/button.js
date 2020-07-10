import React, { Component } from 'react';
import { Button } from 'reactstrap';
class But extends Component {
 render() {
  return (

   <>
    <div className="text-center mt-5">
     <Button className="mr-3" outline color="primary" type="submit">Teacher's Login</Button>{" "}
     <Button outline color="primary" type="submit">Student's Login</Button>
    </div>
   </>

  );
 }
}

export default But;