@echo off
rem -- Check if argument is INSTALL or REMOVE

if not ""%1"" == ""INSTALL"" goto remove

call "%~dp0..\bin\service.bat" install DataforSolutionServer

rem -- Check if 2th argument is STOP
if ""%2"" == ""STOP"" goto end

rem -- Check if a 2th argument exists
if not ""%2""=="" goto checkUserPass
goto startService 


:checkUserPass
rem -- Check if there is a password argument

if not ""%3""=="" goto changeAccount
echo If you specify an user account, but not a password, it is understood the password is empty
goto changeAccount2


:changeAccount
rem -- Set a different account owner for the service

set TCUSER=%2
rem -- If this is a local user, make sure it has the .\ prefix
echo %TCUSER% | findstr /R "[\\|@]" >NUL
if %errorlevel%==1 set TCUSER=.\%TCUSER%

set TCPASSWORD=%3

sc config DataforSolutionServer obj= %TCUSER% password= %TCPASSWORD%
goto startService


:changeAccount2
rem -- Set a different account owner for the service (users without password)

set TCUSER=%2
rem -- If this is a local user, make sure it has the .\ prefix
echo %TCUSER% | findstr /R "[\\|@]" >NUL
if %errorlevel%==1 set TCUSER=.\%TCUSER%



sc config DataforSolutionServer obj= %TCUSER% password= ""
goto startService


:startService
rem -- Start the service

ping 127.0.0.1 -n 3 >NUL
sc start DataforSolutionServer >NUL
goto end

:remove
rem -- STOP SERVICES BEFORE REMOVING
sc stop DataforSolutionServer >NUL
call "%~dp0..\bin\service.bat" remove DataforSolutionServer

:end
exit
