/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/assets/core/js/custom/documentation/charts/google-charts/column.js":
/*!**************************************************************************************!*\
  !*** ./resources/assets/core/js/custom/documentation/charts/google-charts/column.js ***!
  \**************************************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTGoogleChartColumnDemo = function () {\n  // Private functions\n  var exampleColumn = function exampleColumn() {\n    // GOOGLE CHARTS INIT\n    google.load('visualization', '1', {\n      packages: ['corechart', 'bar', 'line']\n    });\n    google.setOnLoadCallback(function () {\n      // COLUMN CHART\n      var data = new google.visualization.DataTable();\n      data.addColumn('timeofday', 'Time of Day');\n      data.addColumn('number', 'Motivation Level');\n      data.addColumn('number', 'Energy Level');\n      data.addRows([[{\n        v: [8, 0, 0],\n        f: '8 am'\n      }, 1, .25], [{\n        v: [9, 0, 0],\n        f: '9 am'\n      }, 2, .5], [{\n        v: [10, 0, 0],\n        f: '10 am'\n      }, 3, 1], [{\n        v: [11, 0, 0],\n        f: '11 am'\n      }, 4, 2.25], [{\n        v: [12, 0, 0],\n        f: '12 pm'\n      }, 5, 2.25], [{\n        v: [13, 0, 0],\n        f: '1 pm'\n      }, 6, 3], [{\n        v: [14, 0, 0],\n        f: '2 pm'\n      }, 7, 4], [{\n        v: [15, 0, 0],\n        f: '3 pm'\n      }, 8, 5.25], [{\n        v: [16, 0, 0],\n        f: '4 pm'\n      }, 9, 7.5], [{\n        v: [17, 0, 0],\n        f: '5 pm'\n      }, 10, 10]]);\n      var options = {\n        title: 'Motivation and Energy Level Throughout the Day',\n        focusTarget: 'category',\n        hAxis: {\n          title: 'Time of Day',\n          format: 'h:mm a',\n          viewWindow: {\n            min: [7, 30, 0],\n            max: [17, 30, 0]\n          }\n        },\n        vAxis: {\n          title: 'Rating (scale of 1-10)'\n        },\n        colors: ['#6e4ff5', '#fe3995']\n      };\n      var chart = new google.visualization.ColumnChart(document.getElementById('kt_docs_google_chart_column'));\n      chart.draw(data, options);\n    });\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      exampleColumn();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTGoogleChartColumnDemo.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL2NvcmUvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vY2hhcnRzL2dvb2dsZS1jaGFydHMvY29sdW1uLmpzLmpzIiwibWFwcGluZ3MiOiJDQUVBOztBQUNBLElBQUlBLHVCQUF1QixHQUFHLFlBQVk7RUFDdEM7RUFDQSxJQUFJQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQVk7SUFDNUI7SUFDQUMsTUFBTSxDQUFDQyxJQUFQLENBQVksZUFBWixFQUE2QixHQUE3QixFQUFrQztNQUM5QkMsUUFBUSxFQUFFLENBQUMsV0FBRCxFQUFjLEtBQWQsRUFBcUIsTUFBckI7SUFEb0IsQ0FBbEM7SUFJQUYsTUFBTSxDQUFDRyxpQkFBUCxDQUF5QixZQUFZO01BQ2pDO01BQ0EsSUFBSUMsSUFBSSxHQUFHLElBQUlKLE1BQU0sQ0FBQ0ssYUFBUCxDQUFxQkMsU0FBekIsRUFBWDtNQUNBRixJQUFJLENBQUNHLFNBQUwsQ0FBZSxXQUFmLEVBQTRCLGFBQTVCO01BQ0FILElBQUksQ0FBQ0csU0FBTCxDQUFlLFFBQWYsRUFBeUIsa0JBQXpCO01BQ0FILElBQUksQ0FBQ0csU0FBTCxDQUFlLFFBQWYsRUFBeUIsY0FBekI7TUFFQUgsSUFBSSxDQUFDSSxPQUFMLENBQWEsQ0FDVCxDQUFDO1FBQ0dDLENBQUMsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUROO1FBRUdDLENBQUMsRUFBRTtNQUZOLENBQUQsRUFHRyxDQUhILEVBR00sR0FITixDQURTLEVBS1QsQ0FBQztRQUNHRCxDQUFDLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FETjtRQUVHQyxDQUFDLEVBQUU7TUFGTixDQUFELEVBR0csQ0FISCxFQUdNLEVBSE4sQ0FMUyxFQVNULENBQUM7UUFDR0QsQ0FBQyxFQUFFLENBQUMsRUFBRCxFQUFLLENBQUwsRUFBUSxDQUFSLENBRE47UUFFR0MsQ0FBQyxFQUFFO01BRk4sQ0FBRCxFQUdHLENBSEgsRUFHTSxDQUhOLENBVFMsRUFhVCxDQUFDO1FBQ0dELENBQUMsRUFBRSxDQUFDLEVBQUQsRUFBSyxDQUFMLEVBQVEsQ0FBUixDQUROO1FBRUdDLENBQUMsRUFBRTtNQUZOLENBQUQsRUFHRyxDQUhILEVBR00sSUFITixDQWJTLEVBaUJULENBQUM7UUFDR0QsQ0FBQyxFQUFFLENBQUMsRUFBRCxFQUFLLENBQUwsRUFBUSxDQUFSLENBRE47UUFFR0MsQ0FBQyxFQUFFO01BRk4sQ0FBRCxFQUdHLENBSEgsRUFHTSxJQUhOLENBakJTLEVBcUJULENBQUM7UUFDR0QsQ0FBQyxFQUFFLENBQUMsRUFBRCxFQUFLLENBQUwsRUFBUSxDQUFSLENBRE47UUFFR0MsQ0FBQyxFQUFFO01BRk4sQ0FBRCxFQUdHLENBSEgsRUFHTSxDQUhOLENBckJTLEVBeUJULENBQUM7UUFDR0QsQ0FBQyxFQUFFLENBQUMsRUFBRCxFQUFLLENBQUwsRUFBUSxDQUFSLENBRE47UUFFR0MsQ0FBQyxFQUFFO01BRk4sQ0FBRCxFQUdHLENBSEgsRUFHTSxDQUhOLENBekJTLEVBNkJULENBQUM7UUFDR0QsQ0FBQyxFQUFFLENBQUMsRUFBRCxFQUFLLENBQUwsRUFBUSxDQUFSLENBRE47UUFFR0MsQ0FBQyxFQUFFO01BRk4sQ0FBRCxFQUdHLENBSEgsRUFHTSxJQUhOLENBN0JTLEVBaUNULENBQUM7UUFDR0QsQ0FBQyxFQUFFLENBQUMsRUFBRCxFQUFLLENBQUwsRUFBUSxDQUFSLENBRE47UUFFR0MsQ0FBQyxFQUFFO01BRk4sQ0FBRCxFQUdHLENBSEgsRUFHTSxHQUhOLENBakNTLEVBcUNULENBQUM7UUFDR0QsQ0FBQyxFQUFFLENBQUMsRUFBRCxFQUFLLENBQUwsRUFBUSxDQUFSLENBRE47UUFFR0MsQ0FBQyxFQUFFO01BRk4sQ0FBRCxFQUdHLEVBSEgsRUFHTyxFQUhQLENBckNTLENBQWI7TUEyQ0EsSUFBSUMsT0FBTyxHQUFHO1FBQ1ZDLEtBQUssRUFBRSxnREFERztRQUVWQyxXQUFXLEVBQUUsVUFGSDtRQUdWQyxLQUFLLEVBQUU7VUFDSEYsS0FBSyxFQUFFLGFBREo7VUFFSEcsTUFBTSxFQUFFLFFBRkw7VUFHSEMsVUFBVSxFQUFFO1lBQ1JDLEdBQUcsRUFBRSxDQUFDLENBQUQsRUFBSSxFQUFKLEVBQVEsQ0FBUixDQURHO1lBRVJDLEdBQUcsRUFBRSxDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsQ0FBVDtVQUZHO1FBSFQsQ0FIRztRQVdWQyxLQUFLLEVBQUU7VUFDSFAsS0FBSyxFQUFFO1FBREosQ0FYRztRQWNWUSxNQUFNLEVBQUUsQ0FBQyxTQUFELEVBQVksU0FBWjtNQWRFLENBQWQ7TUFpQkEsSUFBSUMsS0FBSyxHQUFHLElBQUlyQixNQUFNLENBQUNLLGFBQVAsQ0FBcUJpQixXQUF6QixDQUFxQ0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLDZCQUF4QixDQUFyQyxDQUFaO01BQ0FILEtBQUssQ0FBQ0ksSUFBTixDQUFXckIsSUFBWCxFQUFpQk8sT0FBakI7SUFDSCxDQXJFRDtFQXNFSCxDQTVFRDs7RUE4RUEsT0FBTztJQUNIO0lBQ0FlLElBQUksRUFBRSxnQkFBWTtNQUNkM0IsYUFBYTtJQUNoQjtFQUpFLENBQVA7QUFNSCxDQXRGNkIsRUFBOUIsQyxDQXdGQTs7O0FBQ0E0QixNQUFNLENBQUNDLGtCQUFQLENBQTBCLFlBQVk7RUFDbEM5Qix1QkFBdUIsQ0FBQzRCLElBQXhCO0FBQ0gsQ0FGRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvY29yZS9qcy9jdXN0b20vZG9jdW1lbnRhdGlvbi9jaGFydHMvZ29vZ2xlLWNoYXJ0cy9jb2x1bW4uanM/MGQxYyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8vIENsYXNzIGRlZmluaXRpb25cclxudmFyIEtUR29vZ2xlQ2hhcnRDb2x1bW5EZW1vID0gZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gUHJpdmF0ZSBmdW5jdGlvbnNcclxuICAgIHZhciBleGFtcGxlQ29sdW1uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIEdPT0dMRSBDSEFSVFMgSU5JVFxyXG4gICAgICAgIGdvb2dsZS5sb2FkKCd2aXN1YWxpemF0aW9uJywgJzEnLCB7XHJcbiAgICAgICAgICAgIHBhY2thZ2VzOiBbJ2NvcmVjaGFydCcsICdiYXInLCAnbGluZSddXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGdvb2dsZS5zZXRPbkxvYWRDYWxsYmFjayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vIENPTFVNTiBDSEFSVFxyXG4gICAgICAgICAgICB2YXIgZGF0YSA9IG5ldyBnb29nbGUudmlzdWFsaXphdGlvbi5EYXRhVGFibGUoKTtcclxuICAgICAgICAgICAgZGF0YS5hZGRDb2x1bW4oJ3RpbWVvZmRheScsICdUaW1lIG9mIERheScpO1xyXG4gICAgICAgICAgICBkYXRhLmFkZENvbHVtbignbnVtYmVyJywgJ01vdGl2YXRpb24gTGV2ZWwnKTtcclxuICAgICAgICAgICAgZGF0YS5hZGRDb2x1bW4oJ251bWJlcicsICdFbmVyZ3kgTGV2ZWwnKTtcclxuXHJcbiAgICAgICAgICAgIGRhdGEuYWRkUm93cyhbXHJcbiAgICAgICAgICAgICAgICBbe1xyXG4gICAgICAgICAgICAgICAgICAgIHY6IFs4LCAwLCAwXSxcclxuICAgICAgICAgICAgICAgICAgICBmOiAnOCBhbSdcclxuICAgICAgICAgICAgICAgIH0sIDEsIC4yNV0sXHJcbiAgICAgICAgICAgICAgICBbe1xyXG4gICAgICAgICAgICAgICAgICAgIHY6IFs5LCAwLCAwXSxcclxuICAgICAgICAgICAgICAgICAgICBmOiAnOSBhbSdcclxuICAgICAgICAgICAgICAgIH0sIDIsIC41XSxcclxuICAgICAgICAgICAgICAgIFt7XHJcbiAgICAgICAgICAgICAgICAgICAgdjogWzEwLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgICAgICBmOiAnMTAgYW0nXHJcbiAgICAgICAgICAgICAgICB9LCAzLCAxXSxcclxuICAgICAgICAgICAgICAgIFt7XHJcbiAgICAgICAgICAgICAgICAgICAgdjogWzExLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgICAgICBmOiAnMTEgYW0nXHJcbiAgICAgICAgICAgICAgICB9LCA0LCAyLjI1XSxcclxuICAgICAgICAgICAgICAgIFt7XHJcbiAgICAgICAgICAgICAgICAgICAgdjogWzEyLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgICAgICBmOiAnMTIgcG0nXHJcbiAgICAgICAgICAgICAgICB9LCA1LCAyLjI1XSxcclxuICAgICAgICAgICAgICAgIFt7XHJcbiAgICAgICAgICAgICAgICAgICAgdjogWzEzLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgICAgICBmOiAnMSBwbSdcclxuICAgICAgICAgICAgICAgIH0sIDYsIDNdLFxyXG4gICAgICAgICAgICAgICAgW3tcclxuICAgICAgICAgICAgICAgICAgICB2OiBbMTQsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgICAgIGY6ICcyIHBtJ1xyXG4gICAgICAgICAgICAgICAgfSwgNywgNF0sXHJcbiAgICAgICAgICAgICAgICBbe1xyXG4gICAgICAgICAgICAgICAgICAgIHY6IFsxNSwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgZjogJzMgcG0nXHJcbiAgICAgICAgICAgICAgICB9LCA4LCA1LjI1XSxcclxuICAgICAgICAgICAgICAgIFt7XHJcbiAgICAgICAgICAgICAgICAgICAgdjogWzE2LCAwLCAwXSxcclxuICAgICAgICAgICAgICAgICAgICBmOiAnNCBwbSdcclxuICAgICAgICAgICAgICAgIH0sIDksIDcuNV0sXHJcbiAgICAgICAgICAgICAgICBbe1xyXG4gICAgICAgICAgICAgICAgICAgIHY6IFsxNywgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgZjogJzUgcG0nXHJcbiAgICAgICAgICAgICAgICB9LCAxMCwgMTBdLFxyXG4gICAgICAgICAgICBdKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdNb3RpdmF0aW9uIGFuZCBFbmVyZ3kgTGV2ZWwgVGhyb3VnaG91dCB0aGUgRGF5JyxcclxuICAgICAgICAgICAgICAgIGZvY3VzVGFyZ2V0OiAnY2F0ZWdvcnknLFxyXG4gICAgICAgICAgICAgICAgaEF4aXM6IHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ1RpbWUgb2YgRGF5JyxcclxuICAgICAgICAgICAgICAgICAgICBmb3JtYXQ6ICdoOm1tIGEnLFxyXG4gICAgICAgICAgICAgICAgICAgIHZpZXdXaW5kb3c6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluOiBbNywgMzAsIDBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXg6IFsxNywgMzAsIDBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB2QXhpczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnUmF0aW5nIChzY2FsZSBvZiAxLTEwKSdcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjb2xvcnM6IFsnIzZlNGZmNScsICcjZmUzOTk1J11cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHZhciBjaGFydCA9IG5ldyBnb29nbGUudmlzdWFsaXphdGlvbi5Db2x1bW5DaGFydChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgna3RfZG9jc19nb29nbGVfY2hhcnRfY29sdW1uJykpO1xyXG4gICAgICAgICAgICBjaGFydC5kcmF3KGRhdGEsIG9wdGlvbnMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgLy8gUHVibGljIEZ1bmN0aW9uc1xyXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZXhhbXBsZUNvbHVtbigpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn0oKTtcclxuXHJcbi8vIE9uIGRvY3VtZW50IHJlYWR5XHJcbktUVXRpbC5vbkRPTUNvbnRlbnRMb2FkZWQoZnVuY3Rpb24gKCkge1xyXG4gICAgS1RHb29nbGVDaGFydENvbHVtbkRlbW8uaW5pdCgpO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbIktUR29vZ2xlQ2hhcnRDb2x1bW5EZW1vIiwiZXhhbXBsZUNvbHVtbiIsImdvb2dsZSIsImxvYWQiLCJwYWNrYWdlcyIsInNldE9uTG9hZENhbGxiYWNrIiwiZGF0YSIsInZpc3VhbGl6YXRpb24iLCJEYXRhVGFibGUiLCJhZGRDb2x1bW4iLCJhZGRSb3dzIiwidiIsImYiLCJvcHRpb25zIiwidGl0bGUiLCJmb2N1c1RhcmdldCIsImhBeGlzIiwiZm9ybWF0Iiwidmlld1dpbmRvdyIsIm1pbiIsIm1heCIsInZBeGlzIiwiY29sb3JzIiwiY2hhcnQiLCJDb2x1bW5DaGFydCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJkcmF3IiwiaW5pdCIsIktUVXRpbCIsIm9uRE9NQ29udGVudExvYWRlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/assets/core/js/custom/documentation/charts/google-charts/column.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/assets/core/js/custom/documentation/charts/google-charts/column.js"]();
/******/ 	
/******/ })()
;