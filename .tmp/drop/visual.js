/*
 *  Power BI Visual CLI
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var visual;
        (function (visual) {
            var dayShiftController1CA75DB533334CF2965C7FA70834B73B;
            (function (dayShiftController1CA75DB533334CF2965C7FA70834B73B) {
                var Visual = (function () {
                    function Visual(options) {
                        console.log('Visual constructor', options);
                        this.target = options.element;
                        this.updateCount = 0;
                    }
                    Visual.prototype.update = function (options) {
                        console.log('Visual update', options);
                        this.target.innerHTML = "<p>Przemek update count: <em>" + (this.updateCount++) + "</em></p>";
                        this.target.innerHTML = "\n            <div class=\"month\"> \n   <ul>\n     <li class=\"prev\">&#10094;</li>\n     <li class=\"next\">&#10095;</li>\n     <li>\n       Sierpie\u0144<br>\n       <span style=\"font-size:18px\">2017</span>\n     </li>\n   </ul>\n </div>\n \n <ul class=\"weekdays\">\n   <li>Poniedzia\u0142ek</li>\n   <li>Wtorek</li>\n   <li>\u015Aroda</li>\n   <li>Czwartek</li>\n   <li>Pi\u0105tek</li>\n   <li>Sobota</li>\n   <li>Niedziela</li>\n </ul>\n \n <ul class=\"days\"> \n   <li><span>1</span></li>\n   <li>2</li>\n   <li>3</li>\n   <li>4</li>\n   <li>5</li>\n   <li>6</li>\n   <li>7</li>\n   <li>8</li>\n   <li>9</li>\n   <li><span class=\"active\">10</span></li>\n   <li>12</li>\n   <li>13</li>\n    <li>14</li>\n     <li>15</li>\n      <li>16</li>\n       <li>17</li>\n        <li>18</li>\n         <li>19</li>\n          <li>20</li>\n           <li>21</li>\n            <li>22</li>\n             <li>23</li>\n              <li>24</li>\n               <li>25</li>\n                <li>26</li>\n                 <li>27</li>\n                  <li>28</li>\n                   <li>29</li>\n                    <li>30</li>\n                     <li>31</li>\n\n </ul>          \n             ";
                    };
                    return Visual;
                }());
                dayShiftController1CA75DB533334CF2965C7FA70834B73B.Visual = Visual;
            })(dayShiftController1CA75DB533334CF2965C7FA70834B73B = visual.dayShiftController1CA75DB533334CF2965C7FA70834B73B || (visual.dayShiftController1CA75DB533334CF2965C7FA70834B73B = {}));
        })(visual = extensibility.visual || (extensibility.visual = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
var powerbi;
(function (powerbi) {
    var visuals;
    (function (visuals) {
        var plugins;
        (function (plugins) {
            plugins.dayShiftController1CA75DB533334CF2965C7FA70834B73B_DEBUG = {
                name: 'dayShiftController1CA75DB533334CF2965C7FA70834B73B_DEBUG',
                displayName: 'DayShiftController',
                class: 'Visual',
                version: '1.0.0',
                apiVersion: '1.6.0',
                create: function (options) { return new powerbi.extensibility.visual.dayShiftController1CA75DB533334CF2965C7FA70834B73B.Visual(options); },
                custom: true
            };
        })(plugins = visuals.plugins || (visuals.plugins = {}));
    })(visuals = powerbi.visuals || (powerbi.visuals = {}));
})(powerbi || (powerbi = {}));
//# sourceMappingURL=visual.js.map