import 'highlight.js/styles/github-dark.css';
import React, { FC, useRef } from 'react';

import Highlight from 'components/code';
import Puzzle, { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';

import image0 from 'assets/puzzles/io/0.png';

const SLUG = 'io';

const PuzzlePage: FC<PuzzleDataProps> = ({ puzzleData }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Puzzle puzzleData={puzzleData}>
      <div ref={ref}>
        <p>
          <i>
            All my tests are failing! Can you take a look at my schematic, test
            code, and results and let me know what I need to fix this problem?
          </i>
        </p>
        <p>
          <SheetableImage alt="" src={image0} title="" />
        </p>

        {/* python */}
        <Highlight
          lang="pauwnirmahg"
          enc
          className="overflow-x-auto whitespace-pre"
        >
          {`# File: test1.
# Date: 1991-02-20
# Author: roy g. biv
import io

def test1():
    # Refer to documentation dated April 1971
    # For codes, see page 38
    # Comments needed here!
    io.bind(('IO', 21))
    cp = io.recv(0x3cb44b)
    assert cp == 179

    # Codes from page 37
    io.send(0x3cb44b, 0xD3D6)
    io.send(0x4363d8, 0xE5C5)
    cp = io.recv(0x469990)
    assert cp == 0xEBCD1C0000`}
        </Highlight>
        <br />

        {/* ruby */}
        <Highlight
          lang="spwjgknur"
          enc
          className="overflow-x-auto whitespace-pre"
        >
          {`# File: test2.
# Date: 1993-02-24
# Author: roy g. biv
require 'io'

def test2
  # Refer to documentation dated November 1981
  # For codes, see page 38
  # Comments needed here!
  io.bind('IO', 25)
  cp = io.recv(0x9a6324)
  raise "Assertion failed" unless cp == 861

  # Codes from page 37
  io.send(0x3cb44b, 0xC7C9)
  io.send(0x4363d8, 0xD3C4)
  cp = io.recv(0xdbceff)
  raise "Assertion failed" unless cp == 0xEBCD1C0000

  # Codes from page 37
  io.send(0x42d4f4, 0xE6C9)
  io.send(0xf58231, 0xD5C5)
  cp = io.recv(0xfffac8)
  raise "Assertion failed" unless cp == 0xEBCD1C000000
end
`}
        </Highlight>
        <br />
        {/* Kotlin */}
        <Highlight
          lang="itxnjzh"
          enc
          className="overflow-x-auto whitespace-pre"
        >
          {`// File: test3.
// Date: 2007-09-21
// Author: roy g. biv
package test3

import (
    "io"
    "log"
)

func test3() {
    // Refer to documentation dated May 1996
    // For codes, see page 38
    // Comments needed here!
    io.Bind("IO", 80)
    cp := io.Recv([]byte{0xfa, 0xbe, 0xd4})
    if cp != 2029 {
        log.Fatal("Assertion failed")
    }

    // Codes from page 37
    io.Send([]byte{0x80, 0x00, 0x00}, []byte{0xE2, 0xC9})
    io.Send([]byte{0xf5, 0x82, 0x31}, []byte{0xE9, 0xC5})
    cp = io.Recv([]byte{0x46, 0x99, 0x90})
    if cp != 0xEBCD1C000000 {
        log.Fatal("Assertion failed")
    }

    // Codes from page 37
    io.Send([]byte{0x9a, 0x63, 0x24}, []byte{0xC2, 0xD6})
    io.Send([]byte{0xff, 0xe1, 0x19}, []byte{0xD5, 0xC5})
    cp = io.Recv([]byte{0xff, 0xfa, 0xc8})
    if cp != 0xEBCD1C0000 {
        log.Fatal("Assertion failed")
    }
}
`}
        </Highlight>
        <br />
        {/* Kotlin */}
        <Highlight
          lang="ismvsdhmebg"
          enc
          className="overflow-x-auto whitespace-pre"
        >
          {`/**
 * File: results.kt
 * Date: 2016-02-15
 * Author: roy g. biv
 */

val discriminator = arrayOf(
    0X82, 0X20, 0XBF, 0XB8, 0X18, 0X23, 0XC7, 0XD7, 0X1C, 0X64, 0X19, 0X76, 0XAA,
    0XE0, 0XDB, 0XF4, 0X3D, 0X5D, 0XE5, 0XE5, 0X8B, 0X41, 0X03, 0X4C, 0X94, 0X98)

fun main() {
    // Inputs
    println(exorbitantHash(0x9a, 0x63, 0x24, 0x49, discriminator[8]))
    // TODO: finish printing inputs

    //Outputs
    println(exorbitantHash(0xe6, 0x19, 0x4b, 0x4F, discriminator[14]))
    // TODO: finish printing outputs
}
`}
        </Highlight>
      </div>

      <style jsx global>{`
        .hljs {
          font-size: 80%;
        }
      `}</style>
    </Puzzle>
  );
};

export default PuzzlePage;

export const getServerSideProps = getPuzzleProps(SLUG);
