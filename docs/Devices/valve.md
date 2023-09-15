## Universal code

```Pascal
FUNCTION_BLOCK Valve
VAR_INPUT
	cmd : BOOLEAN := FALSE; // Command open
	iLock : BOOLEAN := TRUE; // Interlock
	fbkOpn : BOOLEAN := FALSE; // Feedback open
	fbkCls: BOOLEAN := FALSE; // Feedback close
END_VAR;

VAR_OUTPUT 
	Q : BOOLEAN := FALSE; // Command
	isCls : BOOLEAN := FALSE; // is closed
	isOpn : BOOLEAN := FALSE; // is opened
	isUndf : BOOLEAN; // Undefined
	isLck : BOOLEAN; // is interlocked
	msg : WORD := 16#0000; // message word
END_VAR;

BEGIN
	Q := cmd and not iLock;
	// State
	isCls := fbkClose AND (NOT fbkOpen);
	isOpn := fbk
	isUndf := (NOT fbkClose) AND (NOT fbkOpen);
	//Message
	msg.%X0 := isUndef;
END;
```

## Siemens code 

## Omron code 

## Codesys code


