export default function() {
  this.get('courses', ({ courses }) => {
    return courses.all().sort((a,b) => {
      if (a.name.toLowerCase() < b.name.toLowerCase()) { return -1; }
      else { return 1; }
    });
  });
  this.get('courses/:id');
  this.get('users', ({ users }) => {
    return users.all().sort((a,b) => {
      const combinedA = `${a.firstName}${a.lastName}`;
      const combinedB = `${b.firstName}${b.lastName}`;
      if (combinedA.toLowerCase() < combinedB.toLowerCase()) { return -1; }
      else { return 1; }
    });
  });
  this.get('users/:id');

  this.post('rounds', (schema, request) => {
    console.log(request.requestBody);
  });
}
