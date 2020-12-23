---
home: true

---
 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css">
<style>
  body {
  margin: 0;
  font: 14px sans-serif;
}
.header {
  background: #26699a;
  height: 60px;
  position: relative;
}
.header .logo {
  position: absolute;
  left: 16px;
}
.header h1 {
  margin: 0;
  padding: 14px 0;
  color: #f0f6fb;
}
.header .buttons.right {
  position: absolute;
  right: 16px;
  top: 22px;
}
.header .buttons a {
  color: #fff;
  text-decoration: none;
  margin-left: 10px;
}
div {
  box-sizing: border-box;
}
h1.title {
  font-weight: 300;
  margin: 30px auto;
  text-align: center;
}
h2 {
  font-weight: 300;
  margin: 10px auto 30px auto;
  text-align: center;
}
.tools {
  width: 100%;
  padding: 30px;
  background: #edf0f1;
  margin-bottom: 1px;
}
.tools.blocks a {
  display: inline-block;
  box-sizing: border-box;
  width: 90px;
  height: 90px;
  position: relative;
  margin: 2px;
  border: 1px solid transparent;
  cursor: pointer;
  border-radius: 3px;
}
.tools.blocks a span {
  font-size: 14px;
  text-align: center;
  display: block;
  bottom: 12px;
  position: absolute;
  width: 100%;
  color: #535557;
}
.tools.blocks a i {
  position: absolute;
  top: 12px;
  width: 100%;
  text-align: center;
  font-size: 30px;
  color: #000;
}
.tools.blocks a.obstacle span {
  bottom: 9px;
  font-size: 12px;
}
.tools.blocks a:hover {
  background: #000;
  border-color: #000;
}
.tools.blocks a:hover span {
  color: #fff;
}
.tools.blocks a:hover i {
  color: #fff;
}
.tools.large-blocks a {
  display: inline-grid;
  box-sizing: border-box;
  width: 100%;
  height: 110px;
  position: relative;
  margin: 2px;
  border: 1px solid transparent;
  cursor: pointer;
  border-radius: 3px;
  background: #fff;
  border-color: #dadedf;
}
.tools.large-blocks a span {
  font-size: 14px;
  display: block;
  top: 18px;
  left: 80px;
  position: absolute;
  width: 150px;
  color: #535557;
}
.tools.large-blocks a p {
  color: #a8adb1;
  font-size: 12px;
  left: 80px;
  top: 28px;
  position: absolute;
  padding-right: 10px;
}
.tools.large-blocks a i {
  position: absolute;
  left: 16px;
  line-height: 88px;
  width: 50px;
  text-align: center;
  font-size: 24px;
  color: #dbe4ec;
  z-index: 5;
}
.tools.large-blocks a .circle {
  width: 50px;
  height: 50px;
  display: block;
  content: '';
  background: #000;
  border-radius: 50%;
  position: absolute;
  top: 20px;
  left: 16px;
}
.tools.large-blocks a:hover {
  background: #000;
  border-color: #000;
}
.tools.large-blocks a:hover * {
  color: #fff;
}
.tools.large-blocks a:hover .circle {
  background: #696969;
}
.tools.large-blocks a.procedures i {
  line-height: 92px;
}

</style>

  <div class="tools blocks">
                <h2>Application Tools</h2>
                <a href="https://www.aiub.edu/category/notices">
                    <i class="fa fa-exclamation"></i>
                    <span>Notices</span>
                </a>
                <a href="data-manager">
                    <i class="fa fa-user"></i>
                    <span>Portal</span>
                </a>
                <a ui-sref="notam-search">
                    <i class="fa fa-calculator"></i>
                    <span>CGPA Calculator</span>
                </a>
                <a ng-href="/#/chart-manager">
                    <i class="fas fa-chalkboard-teacher"></i>
                    <span>Courses</span>
                </a>
                <a ng-href="/#/terminal-procedures">
                    <i class="fas fa-school"></i>
                    <span>AIUB HOME page</span>
                </a>
                <a ng-href="/#/customer-profile">
                    <i class="fas fa-book"></i>
                    <span>Books</span>
                </a>
                <a ng-href="/#/airport-surveillance">
                    <i class="fas fa-download"></i>
                    <span>Softwares</span>
                </a>
    </div>
     <div class="tools large-blocks"> 
                <h2>Computer Science</h2>
                <a href="/CORE/IPL/">
                    <i class="fa fa-file-code"></i>
                    <div class="circle"></div>
                    <span>IPL CS 4001</span>
                    <p><br>Introduction to Programming Language.</p>
                </a>
                 <a ng-href="/CORE/DM/">
                    <i class="fas fa-not-equal"></i>
                    <div class="circle"></div>
                    <span>Descrete Math</span>
                    <p><br>Fundamental maths for CS. Requires CS 4001</p>
                </a>
                 <a ng-href="/CORE/OOP-1/">
                    <i class="fas fa-coffee"></i>
                    <div class="circle"></div>
                    <span>OOP-1</span> 
                    <p><br>Object Oriented programming with JAVA.</p>
                </a>
                <a href="/CORE/DS/">
                    <i class="fab fa-stack-overflow"></i>
                    <div class="circle"></div>
                    <span>Data Structure</span>
                    <p><br>Learn Data structure </p>
                </a>
                <a ui-sref="/CORE/Algo/">
                    <i class="fa fa-sitemap"></i>
                    <div class="circle"></div>
                    <span>Algorithm</span>
                    <p><br> Application and implimentation of Algorithm</p>
                </a>
                <a class="procedures" ng-href="/CORE/Data-Base/">
                    <i class="fas fa-database"></i>
                    <div class="circle"></div>
                    <span>Intro to Database </span>
                    <p><br>Manage database, SQL,mySQL</p>
                </a>
                <a ng-href="/CORE/C-sharp/">
                    <i class="fa fa-hashtag"></i>
                    <div class="circle"></div>
                    <span>OOP-2</span>
                    <p><br> Intro to C#. Require </p>
                </a>
                <a class="obstacle" ng-href="/#/obstacle/upload">
                    <i class="fab fa-internet-explorer"></i>
                    <div class="circle"></div>
                    <span>Webtech</span>
                    <p><br> Frontend HTML, CSS, JS and backend PHP.</p>
                </a>
      </div>