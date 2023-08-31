package ftapi

import (
	"os"
	"sync"
)

var (
	api   *FTAPI
	dbOnce sync.Once
)

type Actor struct {
	Name string	
	Party string
	Age int
	Gender string 
}


type FTAPI struct {
	c *apiClient
	r *apiRepo
}

// our facade should be a single entry point that initiates the repo and the api client

// we need a singleton as the entry point
// if not in the database -query API

func NewApi() *FTAPI {
	apiOnce.Do(func(){
		//initiate the client 
		//initiate the db 
		api = &FTAPI{}
	})

	return api
}

func (api *FTAPI)GetActors() []Actor, error {
	return nil, nil
}