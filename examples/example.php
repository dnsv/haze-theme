<?php

namespace Foo\Bar;

use \Jan\Foo;

class Foobar extends Off
{
    /**
     * @var string
     */
    private $foo;

    /**
     * Comment.
     *
     * @param string $bar
     * @return array
     */
    public function doSomething($bar)
    {
        $this->foo = $bar;
        $arr = [];
        foreach ($this->getValues() as $key => $value) {
            if ($key % 2 == 0) {
                $arr[$key] = $value;
            }
        }

        return $arr;
    }
}
