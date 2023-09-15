## Description

This block parse API-requests to PLC commands. 

Accepted API request commands: 

|API Req | Value | Description | 
|:----|:---:|:----|
|setAuto | 01 | Set device to automatic mode    | 
|setMan  | 02 | Set device to manual mode       |
| reset  | 03 | Reset alarms | 


## Universal code

## Siemens code 

```
FUNCTION_BLOCK "parseAPIRequest"
TITLE = API Interface
{ S7_Optimized_Access := 'TRUE' }
AUTHOR : JDF
FAMILY : API
VERSION : 0.1
//Interface with external operations for common elements
   VAR_OUTPUT 
      aut { ExternalAccessible := 'False'; ExternalVisible := 'False'; ExternalWritable := 'False'} : Bool;
      man { ExternalAccessible := 'False'; ExternalVisible := 'False'; ExternalWritable := 'False'} : Bool;
      rst { ExternalAccessible := 'False'; ExternalVisible := 'False'; ExternalWritable := 'False'} : Bool;
      run { ExternalAccessible := 'False'; ExternalVisible := 'False'; ExternalWritable := 'False'} : Bool;
      stop { ExternalAccessible := 'False'; ExternalVisible := 'False'; ExternalWritable := 'False'} : Bool;
      lastCmdDesc { ExternalAccessible := 'False'; ExternalVisible := 'False'; ExternalWritable := 'False'} : String[4];
      lastCmdTime {InstructionName := 'DTL'; LibVersion := '1.0'; ExternalAccessible := 'False'; ExternalVisible := 'False'; ExternalWritable := 'False'} : DTL;
   END_VAR

   VAR_IN_OUT 
      apiCmd { ExternalAccessible := 'False'; ExternalVisible := 'False'; ExternalWritable := 'False'} : Word;   // API request command
   END_VAR

   VAR_TEMP 
      tmpError : Bool;
   END_VAR

   VAR CONSTANT 
      API_CMD_NOP : Word := 16#0;
      API_CMD_AUT : Word := 16#1;
      API_CMD_MAN : Word := 16#2;
      API_CMD_RUN : Word := 16#3;
      API_CMD_STOP : Word := 16#4;
      API_CMD_RST : Word := 16#5;
      API_CMD_NOTVALID : Word := 16#6;
   END_VAR


BEGIN
	REGION Formal parameters
	  #aut := (#apiCmd = #API_CMD_AUT);
	  #man := (#apiCmd = #API_CMD_MAN);
	  #run := (#apiCmd = #API_CMD_RUN);
	  #stop := (#apiCmd = #API_CMD_STOP);
	  #rst := (#apiCmd = #API_CMD_RST);
	  // Save last API command (as string[4]) and UTC time
	  IF (#apiCmd > #API_CMD_NOP) THEN
	    CASE (#apiCmd) OF
	      #API_CMD_AUT:
	        #lastCmdDesc := 'aut';
	      #API_CMD_MAN:
	        #lastCmdDesc := 'man';
	      #API_CMD_NOP:
	        #lastCmdDesc := 'nop';
	      #API_CMD_NOTVALID:
	        #lastCmdDesc := 'nval';
	      #API_CMD_RST:
	        #lastCmdDesc := 'rst';
	      #API_CMD_RUN:
	        #lastCmdDesc := 'run';
	      #API_CMD_STOP:
	        #lastCmdDesc := 'stop';
	      ELSE
	        #lastCmdDesc := 'err';
	    END_CASE;
	    #lastCmdTime := "ReadPlcUTC"(err => #tmpError);
	  END_IF;
	END_REGION
	
	REGION Reset Cmd 
	  #apiCmd := 16#0000;
	END_REGION
	
END_FUNCTION_BLOCK
```
## Omron code 

## Codesys code 

