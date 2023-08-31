package ftapi

type apiRepo struct {

}

package ftapi

import (
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

var (
	withlog bool = false
)

type repo struct {
	db *gorm.DB
}

func newRepo(path string) *repo {
	config := gorm.Config{}
	if withlog {
		config = gorm.Config{
			Logger: logger.Default.LogMode(logger.Info),
		}
	}

	db, err := gorm.Open(sqlite.Open(path), &config)
	if err != nil {
		// we want to panic here because there is zero chance of recovering from a faulty db config/setup
		panic(err)

	}

	return &repo{db}
}