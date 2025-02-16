To solve this, ensure that parent routes pass down the parameters correctly.  One approach is to use nested routes with explicit parameter definitions. Another approach uses the `Outlet` component in parent routes to render the child routes, effectively propagating the parameters:

```javascript
// App.js
<Routes>
  <Route path="/users/:userId" element={<UserPage/>}>
    <Route path=":userId/profile" element={<ProfilePage/>}/>
  </Route>
</Routes>

// UserPage.js
function UserPage() {
  const {userId} = useParams();
  return (
    <div>
      <h1>User {userId}</h1>
      <Outlet/>
    </div>
  );
}

// ProfilePage.js
function ProfilePage() {
  const {userId} = useParams();
  return <div>User Profile: {userId}</div>;
}
```

In this corrected example, the `Outlet` component in `UserPage` renders the nested `ProfilePage` route.  The `userId` parameter is available in both `UserPage` and `ProfilePage` because it's defined on the parent route and the nesting provides proper propagation.  Explicitly nested routes as in this example also ensures correct param propagation.  Always check that your route structure is properly nested to ensure that parameters are propagated to deeply nested components correctly.
