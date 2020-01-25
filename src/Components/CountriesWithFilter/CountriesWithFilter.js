import React from "react";
// components
import "./CountriesWithFilter.css";
import SearchBar from "../SearchBar/SearchBar";
// material-ui
import LinearProgress from "@material-ui/core/LinearProgress";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

class CountriesWithFilter extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: false,
            data: [],
            table: {
                minWidth: "320px"
            },
            SearchLetter: ""
        };
    }

    filterCountries = event => {
        this.setState({
            SearchLetter: event.currentTarget.id
        });
    };

    componentDidMount() {
        this.setState({
            loading: true
        });
        setTimeout(
            () =>
                fetch("https://restcountries.eu/rest/v2/all")
                    .then(res => res.json())
                    .then(json => json)
                    .then(data => this.setState({ data: data, loading: false }))
                    .catch(error => {
                        this.setState({
                            error: error.errorMessage,
                            loading: false
                        });
                    }),
            1000
        );
    }

    render() {
        const { data, loading, SearchLetter } = this.state;
        let filteredData = data;
        console.log(data);
        if (loading) {
            return (
                <div>
                    <LinearProgress variant="query" color="primary" />
                </div>
            );
        }

        if (SearchLetter) {
             filteredData = data.filter(country => {
              return  country.name[0].toLowerCase() === SearchLetter;
            });
        }

        return (
            <div className="container-CountriesWithFilter">
                <div>
                    <div>
                        <SearchBar filterCountries={this.filterCountries} />
                    </div>
                    <TableContainer component={Paper}>
                        <Table
                            className={this.state.table}
                            aria-label="simple table"
                        >
                            <TableHead>
                                <TableRow>
                                    <TableCell>name</TableCell>
                                    <TableCell align="right">capital</TableCell>
                                    <TableCell align="right">
                                        population
                                    </TableCell>
                                    <TableCell align="right">area</TableCell>
                                    <TableCell align="right">flag</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {filteredData.map(country => (
                                    <TableRow key={country.name}>
                                        <TableCell component="th" scope="row">
                                            {country.name}
                                        </TableCell>
                                        <TableCell align="right">
                                            {country.capital}
                                        </TableCell>
                                        <TableCell align="right">
                                            {country.population}
                                        </TableCell>
                                        <TableCell align="right">
                                            {country.area}
                                        </TableCell>
                                        <TableCell align="right">
                                            <img
                                                src={country.flag}
                                                alt="flag"
                                                width="30px"
                                            />{" "}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        );
    }
}

export default CountriesWithFilter;
