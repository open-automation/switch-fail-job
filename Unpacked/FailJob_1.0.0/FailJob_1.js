/*
                                   
,---.|                        |    
`---.|---.,---.. . .,-.-..   .|--- 
    ||   |,---|| | || | ||   ||    
`---'`   '`---^`-'-'` ' '`---'`---'
C o m m u n i c a t i o n s G r o u p

Author:	Shawmut Communications Group, Dominick G. Peluso
Date:		August 11, 2014

Copyright © 2014

Fails a job for a reason specified.

-----------------------------------------------------------------------

This program is free software; you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation; either version 2 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License along
with this program; if not, write to the Free Software Foundation, Inc.,
51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.

*/

function jobArrived( s : Switch, job : Job )
{
	// Get properties
	var FailMessage = s.getPropertyValue( "Message" );
	var KnownFailKey = s.getPropertyValue( "KnownFailKey" );
	var KnownFailValue = s.getPropertyValue( "KnownFailValue" );
	var KnownFailMessageKey = s.getPropertyValue( "KnownFailMessageKey" );
	
	//	Set private data
	job.setPrivateData(KnownFailKey, KnownFailValue);
	job.setPrivateData(KnownFailMessageKey, FailMessage);
	
	// Fail the job
	job.fail(FailMessage);
}
