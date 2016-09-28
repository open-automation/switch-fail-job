function jobArrived( s : Switch, job : Job )
{
	// Get properties
	var FailMessage = s.getPropertyValue( "FailMessage" );
	var Key = s.getPropertyValue( "FailKey" );
	var Value = s.getPropertyValue( "FailValue" );

	// Set optional private data
	if(Key){
		if(Value){
			job.setPrivateData(Key, Value);
		} else {
			job.setPrivateData(Key, FailMessage);
		}
	}

	// Fail the job
	job.fail(FailMessage);
}
