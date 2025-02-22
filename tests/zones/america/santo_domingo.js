"use strict";

var helpers = require("../../helpers/helpers");

exports["America/Santo_Domingo"] = {

	"guess:by:offset" : helpers.makeTestGuess("America/Santo_Domingo", { offset: true }),

	"guess:by:abbr" : helpers.makeTestGuess("America/Santo_Domingo", { abbr: true }),

	"1890" : helpers.makeTestYear("America/Santo_Domingo", [
		["1890-01-01T04:39:35+00:00", "23:59:59", "LMT", 16776 / 60],
		["1890-01-01T04:39:36+00:00", "23:59:36", "SDMT", 280]
	]),

	"1933" : helpers.makeTestYear("America/Santo_Domingo", [
		["1933-04-01T16:39:59+00:00", "11:59:59", "SDMT", 280],
		["1933-04-01T16:40:00+00:00", "11:40:00", "EST", 300]
	]),

	"1966" : helpers.makeTestYear("America/Santo_Domingo", [
		["1966-10-30T04:59:59+00:00", "23:59:59", "EST", 300],
		["1966-10-30T05:00:00+00:00", "01:00:00", "EDT", 240]
	]),

	"1967" : helpers.makeTestYear("America/Santo_Domingo", [
		["1967-02-28T03:59:59+00:00", "23:59:59", "EDT", 240],
		["1967-02-28T04:00:00+00:00", "23:00:00", "EST", 300]
	]),

	"1969" : helpers.makeTestYear("America/Santo_Domingo", [
		["1969-10-26T04:59:59+00:00", "23:59:59", "EST", 300],
		["1969-10-26T05:00:00+00:00", "00:30:00", "-0430", 270]
	]),

	"1970" : helpers.makeTestYear("America/Santo_Domingo", [
		["1970-02-21T04:29:59+00:00", "23:59:59", "-0430", 270],
		["1970-02-21T04:30:00+00:00", "23:30:00", "EST", 300],
		["1970-10-25T04:59:59+00:00", "23:59:59", "EST", 300],
		["1970-10-25T05:00:00+00:00", "00:30:00", "-0430", 270]
	]),

	"1971" : helpers.makeTestYear("America/Santo_Domingo", [
		["1971-01-20T04:29:59+00:00", "23:59:59", "-0430", 270],
		["1971-01-20T04:30:00+00:00", "23:30:00", "EST", 300],
		["1971-10-31T04:59:59+00:00", "23:59:59", "EST", 300],
		["1971-10-31T05:00:00+00:00", "00:30:00", "-0430", 270]
	]),

	"1972" : helpers.makeTestYear("America/Santo_Domingo", [
		["1972-01-21T04:29:59+00:00", "23:59:59", "-0430", 270],
		["1972-01-21T04:30:00+00:00", "23:30:00", "EST", 300],
		["1972-10-29T04:59:59+00:00", "23:59:59", "EST", 300],
		["1972-10-29T05:00:00+00:00", "00:30:00", "-0430", 270]
	]),

	"1973" : helpers.makeTestYear("America/Santo_Domingo", [
		["1973-01-21T04:29:59+00:00", "23:59:59", "-0430", 270],
		["1973-01-21T04:30:00+00:00", "23:30:00", "EST", 300],
		["1973-10-28T04:59:59+00:00", "23:59:59", "EST", 300],
		["1973-10-28T05:00:00+00:00", "00:30:00", "-0430", 270]
	]),

	"1974" : helpers.makeTestYear("America/Santo_Domingo", [
		["1974-01-21T04:29:59+00:00", "23:59:59", "-0430", 270],
		["1974-01-21T04:30:00+00:00", "23:30:00", "EST", 300],
		["1974-10-27T04:59:59+00:00", "23:59:59", "EST", 300],
		["1974-10-27T05:00:00+00:00", "01:00:00", "AST", 240]
	]),

	"2000" : helpers.makeTestYear("America/Santo_Domingo", [
		["2000-10-29T05:59:59+00:00", "01:59:59", "AST", 240],
		["2000-10-29T06:00:00+00:00", "01:00:00", "EST", 300],
		["2000-12-03T05:59:59+00:00", "00:59:59", "EST", 300],
		["2000-12-03T06:00:00+00:00", "02:00:00", "AST", 240]
	])
};