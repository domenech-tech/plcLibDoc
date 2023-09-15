---
sidebar_position: "1"
slug: /
---
## Programming style guide

Style rules are based on the [PLC Open standard](https://plcopen.org/system/files/downloads/plcopen_coding_guidelines_version_1.0.pdf) and [Siemens Programming Styleguide](https://support.industry.siemens.com/cs/document/81318674/programming-guidelines-and-programming-styleguide-for-simatic-s7-1200-and-s7-1500-and-wincc-(tia-portal)?dti=0&lc=en-ES)
### Naming rules

<dl>
<dt><b>Using physical addresses in programs is forbidden </b></dt>
<dd>Using physical addresses makes code less portable. To use a program on a different manufacturer, or even a different instance on the same manufacturer requires it to be edited</dd>
<dd>Always use variables</dd>
</dl>
<dl>
<dt><b>Use of <a href="https://en.wikipedia.org/wiki/Hungarian_notation">Hungarian notation</a> for phisical input/outputs </b></dt>
<dd>Using the variable's name to also communicate other attributes can improve readability and help reduce programming mistakes</dd>
</dl>

> Used prefixed:
>      
> Boolean inputs: ixVariableName  
> Boolean outputs: qxVariableName  
> Word inputs: iwVariableName  
> Word outputs: qwVariableName  

<dl>
<dt><b>Use of case (capitals) </b></dt>
<dd>Variables: lowerCamelCase</dd>
<dd>Struct instances: PascalForm</dd>
<dd>Constants: UPPER_SNAKE_CASE</dd>
<dd>Functions: PascalForm</dd>
<dd>Structured data definition: PascalCase</dd>
</dl>
<dl>
	<dt><b>Define common 'zone' names</b></dt>
	<dd>As programs get bigger and bigger, there is a tendency to group related variables (for example InfeedSpeed, InfeedAlarm, InfeedStatus)</dd>
	<dd>Use group consistenly</dd>
	<dd>
		<dl>
			<dt>Example</dt>
			<dd>Use: fbkOpen</dd>			
			<dd><span style={{color:"red"}}>Do not use:</span> feedBack_Open, fbk_Open</dd>			
		</dl>
	</dd>
	<dd>
		<dl>
			<dt>Example</dt>
			<dd>Use: Motor1_fbkRun</dd>
			<dd><span style={{color:"red"}}>Do not use:</span>Motor1_fbk_run </dd>
		</dl>
	</dd>
</dl>

<dl>
<dt><b>Define acceptable name length </b></dt>
<dd>Minimum function and variables name length: 8 characters</dd>
<dd>Exceptions: accepted abrebiations, loop variables</dd>
<dd>Maximum variable name: 25 characters</dd>
</dl>

## Coding practice

<dl>
<dt><b>All code shall be used in the application </b></dt>
<dd>Dead code is not allowed</dd>
</dl>


<dl>
	<dt><b>All variables shall be initialized before being used</b></dt>
	<dd>
		<dl>
			<dt>Reasoning:</dt>
			<dd>Reading uninitialized variables in your code gives undetermined behavior to the code</dd>
		</dl>
	</dd>
	<dd>
			<dl>
			<dt>Example:</dt>
			<dd>Reading uninitialized variables in your code gives undetermined behavior to the code</dd>
		</dl>
	</dd>
</dl>

<dl>
	<dt><b>Avoid external variables in functions, function blocks and classes</b></dt>
</dl>

<dl>
	<dt><b>Measure and limit the complexity</b></dt>
	<dd>
		<dl>
			<dt><b>Method 1:</b></dt>
			<dd>Number of lines</dd>
		</dl>
		<dl>
			<dt><b>Method 2:</b></dt>
			<dd>ratio = Number of lines/Number of comments</dd>
		</dl>
		<dl>
			<dt><b>NASA rule nº 4</b></dt>
			<dd>No function should be longer than what can be printed on a single sheet of paper in a standard reference format with one line per statement and one line per declaration. Typically, this means no more than about 60 lines of code per function</dd>
		</dl>
</dd>
</dl>

<dl>
	<dt><b>Line length</b></dt>
	<dd>
		Keep the length of source lines to 79 characters or less
	</dd>
</dl>


<dl>
	<dt><b>Define maximum number of input/output/in-out variables of a POU</b></dt>
</dl>
