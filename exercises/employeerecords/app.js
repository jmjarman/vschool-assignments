var employees = []

function Employee(name, job, salary, status){
this.name = name;
this.job = job;
this.salary = salary;
this.status = status || "Full-Time";
}

for(var i =0; i < 3; i++){
var newEmployee1 = new Employee("John", "developer", 20,000)
var newEmployee2 = new Employee("Bob", "instructor", 100,000)
var newEmployee3 = new Employee("Eric",
"instructor", 60,000, "Part-Time"),
employees.push([i])
}