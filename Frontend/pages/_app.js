import React, { useEffect } from "react";
import PropTypes from "prop-types";
import NextHead from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../lib/theme";
import { SnackbarProvider } from "notistack";
import { AppWrapper } from "../context";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "../static/styles.css";
export default function MyApp(props) {
	const { Component, pageProps } = props;

	useEffect(() => {
		const jssStyles = document.querySelector("#jss-server-side");
		if (jssStyles) {
			jssStyles.parentElement.removeChild(jssStyles);
		}
	}, []);

	return (
		<>
			<NextHead />
			<SnackbarProvider maxSnack={3}>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<AppWrapper>
						<ToastContainer />
						<Component {...pageProps} />
					</AppWrapper>
				</ThemeProvider>
			</SnackbarProvider>
		</>
	);
}

MyApp.propTypes = {
	Component: PropTypes.elementType.isRequired,
	pageProps: PropTypes.object.isRequired,
};
