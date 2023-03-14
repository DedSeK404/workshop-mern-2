import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Select from "react-select";
import {useSelector, useDispatch} from "react-redux"
import { addproduct } from "../../JS/actions/productActions";
import {useNavigate} from "react-router-dom"
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function AddProduct() {
 
  const data = [
    {
      value: "outfit",
      label: "outfit",
    },
    {
      value: "Accessoires",
      label: "Accessoires",
    },
    {
      value: "homme",
      label: "homme",
    },
    {
      value: "femme",
      label: "femme",
    },
    {
      value: "Chaussures",
      label: "Chaussures",
    },
    {
      value: "enfant",
      label: "enfant",
    },
  ];
  const datasize = [
    {
      value: "S",
      label: "s",
    },
    {
      value: "M",
      label: "M",
    },
    {
      value: "L",
      label: "L",
    },
    {
      value: "XL",
      label: "XL",
    },
  ];
  const dataCOLOR = [
    {
      value: "BLUE",
      label: "BLUE",
    },
    {
      value: "WHITE",
      label: "WHITE",
    },
    {
      value: "RED",
      label: "RED",
    },
    {
      value: "GREEN",
      label: "GREEN",
    },
  ];

  // set value for default selection
  const [selectedCat, setselectedCat] = React.useState([]);
  const [selectedSize, setselectedSize] = React.useState([]);
  const [selectedColor, setselectedColor] = React.useState([]);
  // handle onChange event of the dropdown
  const handleChange = (e) => {
    setselectedCat(Array.isArray(e) ? e.map((x) => x.value) : []);
  };
  const handleChangeSize = (e) => {
    setselectedSize(Array.isArray(e) ? e.map((x) => x.value) : []);
  };
  const handleChangeColor = (e) => {
    setselectedColor(Array.isArray(e) ? e.map((x) => x.value) : []);
  };
    //   use state for products
    const [product, setProduct] = React.useState({
      name: "",
      description: "",
      price: 0,
      qtes: 0,
      // color: [],
      // category: [],
      // size: [],
    });  const handleChanges = (e) => {
      setProduct({ ...product, [e.target.name]: e.target.value });
    };
 const [img, setimg] = React.useState("")
const dispatch=useDispatch()
const navigate=useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData();
  
    
    data.append("image", img);
    data.append("price", product.price);
    data.append("name", product.name);
    data.append("description", product.description);
    data.append("qtes", product.qtes);
    data.append("disponible", product.qtes ? true : false);
    data.append("category", selectedCat);
    data.append("size", selectedSize);
    data.append("color", selectedColor);

     dispatch(addproduct(data, navigate));
    console.log(data)
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            add new product
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label=" Name"
                  onChange={handleChanges}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="price"
                  label="price"
                  name="price"
                  type="number"

                  onChange={handleChanges}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="qtes"
                  label="quantity"
                  name="qtes"
                  type="number"
                  onChange={handleChanges}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="description"
                  label="description"
                  type="text"
                  id="description"
                  onChange={handleChanges}
                />
              </Grid>
              <Grid item xs={12}>
                <Select
                  className="dropdown"
                  placeholder="Select Option"
                  value={data.filter((obj) => selectedCat.includes(obj.value))} // set selected values
                  options={data} // set list of the data
                  onChange={handleChange} // assign onChange function
                  isMulti
                  isClearable
                />
              </Grid>
              <Grid item xs={12}>
                <Select
                  className="dropdown"
                  placeholder="Select Option"
                  value={datasize.filter((obj) =>
                    selectedSize.includes(obj.value)
                  )} // set selected values
                  options={datasize} // set list of the data
                  onChange={handleChangeSize} // assign onChange function
                  isMulti
                  isClearable
                />
              </Grid>{" "}
              <Grid item xs={12}>
                <Select
                  className="dropdown"
                  placeholder="Select Option"
                  value={dataCOLOR.filter((obj) =>
                    selectedColor.includes(obj.value)
                  )} // set selected values
                  options={dataCOLOR} // set list of the data
                  onChange={handleChangeColor} // assign onChange function
                  isMulti
                  isClearable
                />
              </Grid>
              <Grid item xs={12}>
              <input
                type="file"
                name="file"
                onChange={(e) => setimg(e.target.files[0])}
              />
            </Grid>
            </Grid>

           

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
