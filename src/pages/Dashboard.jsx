import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  return (
    <Box
      height={"100vh"}
      width={"50%"}
      display={"flex"}
      alignItems="center"
      justifyContent="center"
      gap="20px"
      mx={"auto"}
    >
      <Button
        variant="outlined"
        sx={{
          flex: 1,
          height: "30%",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={() => navigate("/student")}
      >
        <div>Enter</div> <div>As</div> <div>Students</div>
      </Button>
      <Button
        variant="outlined"
        sx={{
          flex: 1,
          height: "30%",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={() => navigate("/login")}
      >
        <div>Enter</div> <div>As</div> <div>Masters</div>
      </Button>
    </Box>
  );
}

export default Dashboard;
