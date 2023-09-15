## Description

This function is used to switch between automatic, manual and local mode 


## Base code

```Pascal
FUNCTION_BLOCK "SetMode"

TITLE = SET OPERATION MODE
{ S7_Optimized_Access := 'TRUE' }
AUTHOR : JDF
FAMILY : COMMON
VERSION : 0.1
//Set operation mode between automatic and manual

   VAR_INPUT
      liMode { ExternalAccessible := 'False'; ExternalVisible := 'False'; ExternalWritable := 'False'} : Bool;
      liAut { ExternalAccessible := 'False'; ExternalVisible := 'False'; ExternalWritable := 'False'} : Bool;
      liMan { ExternalAccessible := 'False'; ExternalVisible := 'False'; ExternalWritable := 'False'} : Bool;
   END_VAR

   VAR_OUTPUT
      isAut { ExternalAccessible := 'False'; ExternalVisible := 'False'; ExternalWritable := 'False'} : Bool;
   END_VAR

   VAR_IN_OUT
      opCmd { ExternalAccessible := 'False'; ExternalVisible := 'False'; ExternalWritable := 'False'} : Word;
   END_VAR

   VAR
      statAut { ExternalAccessible := 'False'; ExternalVisible := 'False'; ExternalWritable := 'False'} : Bool;
      statIsAut { ExternalAccessible := 'False'; ExternalVisible := 'False'; ExternalWritable := 'False'} : Bool;
   END_VAR

   VAR_TEMP
      tmpSetAut : Bool;
      tmpSetMan : Bool;
      tmpOpAut : Bool;
      tmpOpMan : Bool;
      tmpIsAut : Bool;
   END_VAR

   VAR CONSTANT
      OP_CMD_SETAUT : Word := 16#1;
      OP_CMD_SETMAN : Word := 16#2;
   END_VAR

BEGIN

  REGION Operator commands
    #tmpOpAut := (#opCmd = #OP_CMD_SETAUT);
    #tmpOpMan := (#opCmd = #OP_CMD_SETAUT);
  END_REGION

  REGION Effective command
    #tmpSetAut := #tmpOpAut AND (NOT #tmpOpMan);
    IF #liMode THEN
      #tmpSetAut := #liAut AND (NOT #liMan);
    END_IF;
  END_REGION

  REGION Calc outputs
    #tmpIsAut := (#statIsAut OR #tmpSetAut) AND (NOT #tmpSetMan);
  END_REGION

  REGION Formal parameters
    #isAut := #tmpIsAut;
  END_REGION

  REGION Memories
    #statIsAut := #tmpIsAut;
  END_REGION

  REGION Reset operator commands
    #opCmd := 16#0000;
  END_REGION

END_FUNCTION_BLOCK

```

## Siemens code 

## Omron code 

## Codesys code 

