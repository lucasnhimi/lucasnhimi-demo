import useAuth from './../hooks/useAuth';

function Dashboard(props) {
  const {user} = useAuth();
  console.log(user)
  return (
    <div>
      {user?.displayName}
    </div>
  );
}

export default Dashboard;