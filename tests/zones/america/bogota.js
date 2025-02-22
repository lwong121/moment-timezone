"use strict";

var helpers = require("../../helpers/helpers");

exports["America/Bogota"] = {

	"guess:by:offset" : helpers.makeTestGuess("America/Bogota", { offset: true, expect: "America/Lima" }),

	"guess:by:abbr" : helpers.makeTestGuess("America/Bogota", { abbr: true, expect: "America/Lima" }),

	"1884" : helpers.makeTestYear("America/Bogota", [
		["1884-03-13T04:56:15+00:00", "23:59:59", "LMT", 17776 / 60],
		["1884-03-13T04:56:16+00:00", "00:00:00", "BMT", 17776 / 60]
	]),

	"1914" : helpers.makeTestYear("America/Bogota", [
		["1914-11-23T04:56:15+00:00", "23:59:59", "BMT", 17776 / 60],
		["1914-11-23T04:56:16+00:00", "23:56:16", "-05", 300]
	]),

	"1992" : helpers.makeTestYear("America/Bogota", [
		["1992-05-03T04:59:59+00:00", "23:59:59", "-05", 300],
		["1992-05-03T05:00:00+00:00", "01:00:00", "-04", 240]
	]),

	"1993" : helpers.makeTestYear("America/Bogota", [
		["1993-02-07T03:59:59+00:00", "23:59:59", "-04", 240],
		["1993-02-07T04:00:00+00:00", "23:00:00", "-05", 300]
	])
};