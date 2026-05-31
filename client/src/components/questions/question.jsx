import { Accordion, AccordionItem } from "@szhsin/react-accordion";

const Question = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16 font-semibold">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold mb-3 text-[#5C766D]">Frequently Asked Questions</h2>
        <p className="text-[#80532a]">
          Learn more about Qidwai Hours and what makes it unique.
        </p>
      </div>

      <Accordion className="space-y-4">
        <AccordionItem
          header="Why Choose Qidwai Hours?"
          className="border border-gray-200 rounded-2xl text-[#5C766D] overflow-hidden shadow-sm"
          buttonProps={{
            className:
              "w-full flex justify-between items-center px-6 py-5 text-left text-lg font-semibold bg-white hover:bg-gray-50 transition",
          }}
          contentProps={{
            className: "px-6 pb-5 text-gray-600 leading-relaxed",
          }}
        >
          Qidwai Hours is a modern publishing platform where writers,
          bloggers, students, and professionals can create high-quality
          articles, share knowledge, and reach a wider audience.
        </AccordionItem>

        <AccordionItem
          header="What Makes Us Different?"
          className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm text-[#5C766D]"
          buttonProps={{
            className:
              "w-full flex justify-between items-center px-6 py-5 text-left text-lg font-semibold bg-white hover:bg-gray-50 transition",
          }}
          contentProps={{
            className: "px-6 pb-5 text-gray-600 leading-relaxed",
          }}
        >
          <ul className="list-disc pl-5 space-y-2">
            <li>Reader-friendly layouts</li>
            <li>SEO-friendly content structure</li>
            <li>Community-driven knowledge sharing</li>
          </ul>
        </AccordionItem>

        <AccordionItem
          header="Featured Categories"
          className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm text-[#5C766D]"
          buttonProps={{
            className:
              "w-full flex justify-between items-center px-6 py-5 text-left text-lg font-semibold bg-white hover:bg-gray-50 transition",
          }}
          contentProps={{
            className: "px-6 pb-5 text-gray-600 leading-relaxed",
          }}
        >
          <div className="grid md:grid-cols-2 gap-4">
            <div>📚 Education — Tutorials and learning resources</div>
            <div>💼 Business — Entrepreneurship and productivity</div>
            <div>💻 Technology — AI, software, and innovation</div>
            <div>🌍 Lifestyle — Health, travel, and culture</div>
            <div>✍️ Creative Writing — Stories and opinions</div>
          </div>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default Question;