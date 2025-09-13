import React, { useEffect, useState } from "react";
import "../../../../css/Verse1.css";
import Navbar from "../../../pages/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faBible } from "@fortawesome/free-solid-svg-icons";

function Chapter1() {
  const [verses, setVerses] = useState([]);
  const [loading, setLoading] = useState(true);

  // Exemplo: livro (Gênesis) capítulo 1
  const chapterSlug = "gen_1"; 

  useEffect(() => {
    async function fetchChapter() {
      try {
        // 1) Carrega capítulos
        const chapRes = await fetch("/json/chapters.json");
        const chapters = await chapRes.json();

        // 2) Acha o capítulo desejado
        const chapter = chapters.find((ch) => ch.fields.slug === chapterSlug);

        if (!chapter) {
          console.warn("Capítulo não encontrado!");
          setLoading(false);
          return;
        }

        // 3) Carrega todos os versículos
        const verseRes = await fetch("/json/verses.json");
        const allVerses = await verseRes.json();

        // 4) Filtra só os versículos do capítulo
        const chapterVerses = allVerses.filter((v) =>
          chapter.fields.verses.includes(v.id)
        );

        // 5) Ordena pelo número do versículo
        chapterVerses.sort(
          (a, b) => a.fields.verseNum - b.fields.verseNum
        );

        setVerses(chapterVerses);
      } catch (error) {
        console.error("Erro ao carregar capítulo:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchChapter();
  }, [chapterSlug]);

  return (
    <>
      <Navbar />

      <div className="playVerse">
        <div className="buttonPlay">
          <button id="play">
            <FontAwesomeIcon icon={faPlay} />
          </button>
        </div>
        <div className="buttonPause">
          <button id="pause">
            <FontAwesomeIcon icon={faPause} />
          </button>
        </div>
        <div className="version">
          <button id="version">
            <FontAwesomeIcon icon={faBible} />
          </button>
        </div>
      </div>

      <div className="BibleText">
        {loading ? (
          <p>Carregando capítulo...</p>
        ) : verses.length > 0 ? (
          verses.map((verse) => (
            <p key={verse.id}>
              <strong>{verse.fields.verseNum}</strong> {verse.fields.verseText}
            </p>
          ))
        ) : (
          <p>Nenhum versículo encontrado.</p>
        )}
      </div>
    </>
  );
}

export default Chapter1;
