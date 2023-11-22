const Help = () => {

  return (
    <div>
      <h1>Help</h1>
      <div className="help-grp">
        <h3>Variables</h3>
        <p>A variable is used to store a data.</p>
        <p>To build a simple program you should start by <strong>declaring a variable</strong>, then you should <strong>assign a value to the variable</strong> and finally <strong>display the value of the variable.</strong></p>
        
        <div className="grp">
          <p>Declaring a variable is like creating a variable :</p>
          <div className="help-exemple">
            <span>DECLARE x</span>
          </div>
        </div>

        <div className="grp">
          <p>Assign a value to a variable is like store a value in a memory box :</p>
          <div className="help-exemple">
            <span>x = 5</span>
          </div>
        </div>

      </div>
      <div className="help-grp">
        <h3>Condition</h3>
        <p>A condition is used to execute a sequence of instructions according to one or more parameters</p>
        <div className="help-exemple">
          <span>IF x > 10</span>
        </div>
      </div>
    </div>
  );
};

export default Help;