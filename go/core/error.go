package core

type TempmailError struct {
	IsTempmailError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewTempmailError(code string, msg string, ctx *Context) *TempmailError {
	return &TempmailError{
		IsTempmailError: true,
		Sdk:              "Tempmail",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *TempmailError) Error() string {
	return e.Msg
}
