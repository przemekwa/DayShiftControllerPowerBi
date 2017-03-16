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

module powerbi.extensibility.visual {
    export class Visual implements IVisual {
        private target: HTMLElement;
        private updateCount: number;

        constructor(options: VisualConstructorOptions) {
            console.log('Visual constructor', options);
            this.target = options.element;
            this.updateCount = 0;
        }

        public update(options: VisualUpdateOptions) {
            console.log('Visual update', options);
            this.target.innerHTML = `<p>Przemek update count: <em>${(this.updateCount++)}</em></p>`;

            this.target.innerHTML = `
            <div class="month"> 
   <ul>
     <li class="prev">&#10094;</li>
     <li class="next">&#10095;</li>
     <li>
       Sierpień<br>
       <span style="font-size:18px">2017</span>
     </li>
   </ul>
 </div>
 
 <ul class="weekdays">
   <li>Poniedziałek</li>
   <li>Wtorek</li>
   <li>Środa</li>
   <li>Czwartek</li>
   <li>Piątek</li>
   <li>Sobota</li>
   <li>Niedziela</li>
 </ul>
 
 <ul class="days"> 
   <li><span>1</span></li>
   <li>2</li>
   <li>3</li>
   <li>4</li>
   <li>5</li>
   <li>6</li>
   <li>7</li>
   <li>8</li>
   <li>9</li>
   <li><span class="active">10</span></li>
   <li>12</li>
   <li>13</li>
    <li>14</li>
     <li>15</li>
      <li>16</li>
       <li>17</li>
        <li>18</li>
         <li>19</li>
          <li>20</li>
           <li>21</li>
            <li>22</li>
             <li>23</li>
              <li>24</li>
               <li>25</li>
                <li>26</li>
                 <li>27</li>
                  <li>28</li>
                   <li>29</li>
                    <li>30</li>
                     <li>31</li>

 </ul>          
             `


        }
    }
}