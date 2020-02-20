# Exercise 17

1. Implement append, replace and delete in the car tool using the REST API. After performing append, replace and delete, refresh the list from the server.

Example of a fetch call using a different verb, request body and url:

```javascript
fetch('http://localhost:3050/cars/1', {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(car),
})
  .then(res => res.json())
  .then(result => console.log(result));
```

2. Ensure it works!