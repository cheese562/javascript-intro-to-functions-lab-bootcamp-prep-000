function shout(string)
{
  return string.toUpperCase()
}

function whisper(string)
{
  return string.toLowerCase()
}

function logShout(string)
{
  console.log(string.toUpperCase())
}

function logWhisper(string)
{
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string)
{
  if (string.toLowerCase() === string)
  {
    console.log("I can\'t hear you!")
  }
  else if (string.toUpperCase() === string)
  {
    console.log("YES INDEED!")
  }
  else
  {
    
  }
}





  it('returns "I love you, too." if `string` is "I love you, Grandma."`', function() {
    expect(sayHiToGrandma("I love you, Grandma.")).toEqual("I love you, too.")
  })
})

